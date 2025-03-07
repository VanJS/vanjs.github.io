import { Button } from "@/components/ui/button"

export function RecordingsSection() {
  return (
    (<section className="border-t bg-gray-50 py-16">
      <div className="container space-y-8">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[#FEB92F]">Meetup Recordings</h2>
          <h3 className="mt-2 text-3xl font-bold">Missed the previous meetup? Don't worry!</h3>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We've recorded the past events so you can easily watch them on our YouTube channel.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div
            className="aspect-video overflow-hidden rounded-lg border bg-white shadow-sm">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="VanJS Meetup Recording"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
          <div className="mt-4 text-center">
            <Button
              variant="outline"
              className="border-[#FEB92F] text-[#FEB92F] hover:bg-[#FEB92F] hover:text-white">
              Watch on YouTube
            </Button>
          </div>
        </div>
      </div>
    </section>)
  );
}

