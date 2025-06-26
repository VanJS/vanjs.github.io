export default function CallForSpeakers() {
  return (
    <section className="mt-8 mb-8 ml-4 mr-4 md:w-[700px] lg:w-[910px] py-24 px-8 bg-[#FEB92F] text-[#1C1B1B] rounded-[10px]">
      <div className="max-w-4xl p-6 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-[30px] font-bold mb-4">
          Do you want to share your experience with our community?
        </h2>
        <p className="text-[17px] mb-8 p-8 md:p-0">
          We would love to have you sharing your knowledge as one of our speakers!
        </p>
        
        <a
          href="https://github.com/VanJS/meetup/blob/master/SPEAKING.md"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15px] md:w-full bg-[#feb92f] border-1 border-black text-black px-6 py-3 rounded-md hover:text-white hover:bg-black cursor-pointer"
        >
          Send Your Application Here
        </a>
      </div>
    </section>
  );
}
