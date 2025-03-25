import React, { useEffect, useRef, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LiveStreamPage = () => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [countdown, setCountdown] = useState(60);
  const [timer, setTimer] = useState(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const recordingIntervalRef = useRef(null);

  useEffect(() => {
    if (isStreaming) {
      const signalingServerUrl = "ws://localhost:8080";
      const ws = new WebSocket(signalingServerUrl);

      const pc = new RTCPeerConnection({
        iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
      });

      ws.onmessage = async (message) => {
        const data = JSON.parse(message.data);

        if (data.type === "offer") {
          await pc.setRemoteDescription(new RTCSessionDescription(data));
          const answer = await pc.createAnswer();
          await pc.setLocalDescription(answer);
          ws.send(JSON.stringify(pc.localDescription));
        } else if (data.type === "answer") {
          await pc.setRemoteDescription(new RTCSessionDescription(data));
        } else if (data.type === "candidate") {
          await pc.addIceCandidate(new RTCIceCandidate(data.candidate));
        }
      };

      pc.onicecandidate = (event) => {
        if (event.candidate) {
          ws.send(
            JSON.stringify({ type: "candidate", candidate: event.candidate })
          );
        }
      };

      pc.ontrack = (event) => {
        remoteVideoRef.current.srcObject = event.streams[0];
      };

      const startStream = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        localVideoRef.current.srcObject = stream;
        stream.getTracks().forEach((track) => pc.addTrack(track, stream));
        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);
        ws.send(JSON.stringify(offer));
      };

      startStream();

      return () => {
        pc.close();
        ws.close();
      };
    }
  }, [isStreaming]);

  useEffect(() => {
    if (isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  }, [isRecording]);

  const startRecording = () => {
    const stream = localVideoRef.current.srcObject;
    if (!stream) {
      console.error("No stream available for recording.");
      return;
    }
    mediaRecorderRef.current = new MediaRecorder(stream, {
      mimeType: "video/webm; codecs=vp9",
    });
    mediaRecorderRef.current.ondataavailable = handleDataAvailable;
    mediaRecorderRef.current.onstop = handleStop;
    mediaRecorderRef.current.start(1000); // Request data every second
    console.log("Recording started.");
    setRecordingTime(0);
    recordingIntervalRef.current = setInterval(() => {
      setRecordingTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      console.log("Recording stopped.");
      clearInterval(recordingIntervalRef.current);
    }
  };

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      setRecordedChunks((prev) => [...prev, event.data]);
      console.log("Data available:", event.data);
    } else {
      console.log("No data available in event.");
    }
  };

  const handleStop = () => {
    console.log("MediaRecorder stopped, total chunks:", recordedChunks.length);
  };

  const handleStartClick = () => {
    if (!isStreaming) {
      startCountdown();
    }
  };

  const handleEndClick = () => {
    clearInterval(timer);
    setIsStreaming(false);
    setIsRecording(false);
    setRecordedChunks([]);
    clearInterval(recordingIntervalRef.current);

    // Properly stop all media tracks for local stream
    if (localVideoRef.current && localVideoRef.current.srcObject) {
      const tracks = localVideoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      localVideoRef.current.srcObject = null;
    }

    // Properly stop all media tracks for remote stream
    if (remoteVideoRef.current && remoteVideoRef.current.srcObject) {
      const tracks = remoteVideoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      remoteVideoRef.current.srcObject = null;
    }
  };

  const handleRecordingClick = () => {
    setIsRecording((prev) => !prev);
  };

  const saveRecording = () => {
    if (recordedChunks.length === 0) {
      console.error("No recorded chunks to save.");
      return;
    }
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = "recorded.webm";
    a.click();
    window.URL.revokeObjectURL(url);
    console.log("Recording saved.");
  };

  const startCountdown = () => {
    setCountdown(5);
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsStreaming(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    setTimer(interval);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
    <Navbar />
      <Breadcrumb heading={"Live Stream"} link={"Live Stream"}/>
      <div className="mt-5">
        <h1 className="text-center">Live Stream</h1>
        {isStreaming ? (
          <div className="text-center d-flex align-items-center flex-column gap-3">
            <div className="mb-3">
              <button className="btn btn-danger me-2" onClick={handleEndClick}>
                End Live
              </button>
              <button
                className="btn btn-primary me-2"
                onClick={handleRecordingClick}
              >
                {isRecording ? "Stop Recording" : "Start Recording"}
              </button>
              {isRecording && (
                <>
                  <button className="btn btn-success" onClick={saveRecording}>
                    Save Recording
                  </button>
                  <div>Recording Time: {formatTime(recordingTime)}</div>
                </>
              )}
            </div>
            <div className="d-flex flex-column flex-lg-row gap-3 w-100 justify-content-center" style={{marginLeft: "50%"}}>
              <video
                ref={localVideoRef}
                autoPlay
                playsInline
                className="w-100"
                style={{ height: "50%" }}
              />
              <video
                ref={remoteVideoRef}
                autoPlay
                playsInline
                className="w-100"
                style={{ height: "50%" }}
              />
            </div>
          </div>
        ) : (
          <div className="text-center mt-5">
            <h2>Stream will start in: {countdown}s</h2>
            <button className="btn btn-primary " onClick={handleStartClick}>
              Start Live Stream
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default LiveStreamPage;
