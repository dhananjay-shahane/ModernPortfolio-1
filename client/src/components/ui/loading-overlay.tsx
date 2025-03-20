
import { Loader } from "./loader";

interface LoadingOverlayProps {
  message?: string;
}

export function LoadingOverlay({ message = "Loading..." }: LoadingOverlayProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4 rounded-lg bg-card p-6 shadow-lg">
        <Loader className="w-48" size="md" />
        <p className="text-sm text-muted-foreground">{message}</p>
      </div>
    </div>
  );
}
