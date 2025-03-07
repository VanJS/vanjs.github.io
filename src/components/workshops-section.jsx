import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function WorkshopsSection() {
  return (
    (<section className="py-16">
      <div className="container">
        <div className="overflow-hidden rounded-lg bg-[#FEB92F]/10">
          <div className="p-8 md:p-12">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Workshops</h2>
                <p className="text-gray-600">
                  Level up your team's skills with VanJS and CodeNorth's on-site workshops! Hands-on learning led by
                  industry experts.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-[#FEB92F] text-black hover:bg-[#e9a820]">Request Workshop</Button>
                  <Button
                    variant="outline"
                    className="border-[#FEB92F] text-[#FEB92F] hover:bg-[#FEB92F] hover:text-white">
                    View All Workshops
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold">VanJS</div>
                  <Icons.code className="h-8 w-8 text-[#FEB92F]" />
                  <div className="text-3xl font-bold">CodeNorth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>)
  );
}

