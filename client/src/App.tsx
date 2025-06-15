import Footer from "./components/footer/Footer";
import ListType from "./components/list/ListType";

const App = () => {
  
  return (
    <>
     <main className="bg-gray-900 min-h-screen w-full flex items-center justify-center relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl w-[38rem] h-[38rem]"
        >
          <div
            style={{
              clipPath:
                "polygon(67% 0%, 100% 43%, 82% 100%, 21% 93%, 0% 44%, 18% 14%, 38% 0%)",
            }}
            className="w-full h-full bg-gradient-to-br from-[#ff80b5] via-[#9089fc] to-[#6ee7b7] opacity-30 rounded-full shadow-2xl"
          />
        </div>

        <div className="flex flex-col items-center gap-6 px-4">
          <div className="relative flex items-center justify-center bg-gradient-to-br from-[#18181b] to-[#1e293b] rounded-full shadow-lg p-8 sm:p-16 border border-white/10">
            <h1 className="text-4xl sm:text-5xl font-bold text-white text-center leading-tight tracking-tight">
              <span className="text-white sm:bg-gradient-to-r sm:from-[#ff80b5] sm:to-[#9089fc] sm:bg-clip-text sm:text-transparent">
                Hello 🙌 Developer
              </span>
            </h1>
          </div>

          <ListType />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
