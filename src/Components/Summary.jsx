import React, { useState } from 'react';

function Summary({ isTrans, transcript, videoId }) {
  const [notfi, setNotfi] = useState(false);
  const [videoSummary, setVideoSummary] = useState('');

  const copyToClipboard = () => {
    setNotfi(true);
    setTimeout(() => {
      setNotfi(false);
    }, 3000);
    navigator.clipboard.writeText(transcript).then(
      () => {
        console.log('Text copied to clipboard');
      },
      (err) => {
        console.error('Failed to copy text: ', err);
      }
    );
  };

  const summarizeVideo = async () => {
    try {
      // Call your video summarization function here
      const summary = await generateVideoSummary(videoId);
      setVideoSummary(summary);
    } catch (error) {
      console.error('Error summarizing video:', error);
    }
  };

  const generateVideoSummary = (videoId) => {
    // Implement your video summarization logic here
    // This is a placeholder, you'll need to replace it with your actual logic
    const sampleSummary = [
      'The video discusses the latest advancements in artificial intelligence.',
      'It highlights the potential impact of AI on various industries.',
      'The video also touches on the ethical considerations surrounding AI development.'
    ];
    return sampleSummary.join('\n');
  };

  return (
    <>
      {notfi ? (
        <div
          id="toast-top-right"
          className="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow top-5 right-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
          role="alert"
        >
          <div className="text-sm text-green-500 font-bold">Text copied</div>
        </div>
      ) : null}

      {isTrans ? (
        <div className="mx-auto backdrop-blur-sm bg-white/20 w-5/6 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <button onClick={copyToClipboard}>
            Copy the Summary <i className="fa fa-copy"></i>
          </button>
          <h1 className="text-white">{transcript}</h1>
          {videoId && (
            <div className="mt-4">
              <h2 className="text-white font-bold">Video Summary:</h2>
              <p className="text-white">{videoSummary || 'Generating summary...'}</p>
              <button
                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out mt-2"
                onClick={summarizeVideo}
              >
                Summarize Video
              </button>
            </div>
          )}
        </div>
      ) : null}
    </>
  );
}

export default Summary;