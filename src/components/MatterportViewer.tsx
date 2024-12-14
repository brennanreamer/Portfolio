interface MatterportViewerProps {
  url: string;
}

const MatterportViewer = ({ url }: MatterportViewerProps) => {
  return (
    <div className="w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={url}
        width="100%"
        height="100%"
        allow="xr-spatial-tracking"
        allowFullScreen
        className="border-0"
      />
    </div>
  );
};

export default MatterportViewer;
