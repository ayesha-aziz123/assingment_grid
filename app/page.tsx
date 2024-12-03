export default function GridLayout() {
  return (
    <div className="bg-[#fceecb] min-h-screen p-4 sm:p-8 lg:p-16">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-10 gap-4 sm:gap-6 text-center
       text-black font-semibold"
      >
        <div className="sm:col-span-2 md:col-span-3 lg:col-span-2 bg-[#70d9d2] rounded-md py-6 sm:py-8 lg:py-10">
          <div className="text-lg">AG1</div>
          <div className="text-sm">2 of 10</div>
        </div>

        <div className="sm:col-span-2 md:col-span-3 lg:col-span-6 bg-[#fbe7b2] rounded-md pt-4">
          <div className="text-lg">AG2</div>
          <div className="text-sm mb-4 lg:mb-6">6 of 10</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-6 lg:gap-6">
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-[#efa09c] rounded-md py-6 sm:py-8 lg:py-12">
              <div className="text-lg">AG4</div>
              <div className="text-sm">3 of 6</div>
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-[#efa09c] rounded-md py-6 sm:py-8 lg:py-12">
              <div className="text-lg">AG5</div>
              <div className="text-sm">3 of 6 (omega)</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-6 lg:gap-6">
            <div className="col-span-1 sm:col-span-3 lg:col-span-2 bg-[#f39770] rounded-md py-6 sm:py-8 lg:py-12">
              <div className="text-lg">AG6</div>
              <div className="text-sm">2 of 6</div>
            </div>
            <div className="col-span-1 sm:col-span-3 lg:col-span-4 bg-[#f9d77e] rounded-md pt-6 sm:pt-8 lg:pt-10">
              <div className="text-lg">AG7</div>
              <div className="text-sm mb-4 lg:mb-6">4 of 6 (omega)</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4">
                <div className="col-span-1 sm:col-span-1 lg:col-span-2 bg-[#efa09c] rounded-md py-6 sm:py-8 lg:py-8">
                  <div className="text-lg">AG8</div>
                  <div className="text-sm">2 of 4</div>
                </div>
                <div className="col-span-1 sm:col-span-1 lg:col-span-2 bg-[#efa09c] rounded-md py-6 sm:py-8 lg:py-8">
                  <div className="text-lg">AG9</div>
                  <div className="text-sm">2 of 4 (omega)</div>
                </div>
              </div>

              <div className="bg-[#eba1c3] rounded-md py-6 sm:py-8 lg:py-12">
                <div className="text-lg">AG10</div>
                <div className="text-sm">auto</div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:col-span-2 md:col-span-3 lg:col-span-2 bg-[#70d9d2] rounded-md py-6 sm:py-8 lg:py-10">
          <div className="text-lg">AG3</div>
          <div className="text-sm">2 of 10 (omega)</div>
        </div>
      </div>
    </div>
  );
}
