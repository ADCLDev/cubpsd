'use client'
import { useEffect, useState } from 'react';
import { fetchYouTubeVideo } from '../../utils/api';

const YouTubeVideo = () => {
  const [video, setVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        setIsLoading(true);
        const data = await fetchYouTubeVideo();
        setVideo(data[0]); // Assuming you want to display the first video
        setError(null);
      } catch (error) {
        console.error('Error fetching video:', error);
        setError('Failed to load video');
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideo();
  }, []);

  // Function to extract video ID from various YouTube URL formats
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    
    // Handle different URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
      /youtube\.com\/embed\/([^&\n?#]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }

    return url; // If the url is already a video ID
  };

  if (isLoading) {
    return (
      <div className="w-80 lg:w-[560px] h-[315px] flex items-center justify-center bg-slate-200 rounded-lg">
        <div className="animate-pulse text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-80 lg:w-[560px] h-[315px] flex items-center justify-center bg-slate-200 rounded-lg">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  const videoId = getYouTubeVideoId(video?.video_id || 'NV3sBlRgzTI'); // Use provided video ID or default
  const defaultWidth = 560;
  const defaultHeight = 315;

  return (
    <div className="relative">
      <iframe
        className="card border-white border-[10px] shadow-2xl drop-shadow-2xl rounded-lg bg-slate-400"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={video?.title || "YouTube video player"}
        width={video?.width || defaultWidth}
        height={video?.height || defaultHeight}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default YouTubeVideo;