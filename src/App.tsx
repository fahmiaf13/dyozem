import { Navbar } from "./components";
import BackgroundImage from "@/assets/about/bg.jpg";
import LogoBlack from "@/assets/about/dyozem.png";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <section className="w-full h-[700px] relative">
          <div className="absolute z-[2] flex h-full w-full justify-center items-center">
            <div className="text-white">
              <div className="w-full justify-center flex">
                <img src="/logo.png" width={300} />
              </div>
              <div className="text-center text-4xl font-extrabold">DYOZEM</div>
              <div className="text-lg font-extralight">EVENT ORGANIZER AND SOCIAL MEDIA MANAGEMENT</div>
            </div>
          </div>
          <div className="bg-[#1f2c6c] absolute z-[1] w-full h-full opacity-80"></div>
          <img src={BackgroundImage} className="w-full object-cover h-full blur-sm" />
        </section>
        <section className="container mx-auto">
          <div className="text-center font-extrabold text-3xl mt-5">PROFILE</div>
          <div className="flex">
            <div className="w-1/2 flex justify-center">
              <img src={LogoBlack} alt="" width={500} />
            </div>
            <div className="w-1/2 flex items-center">
              Kami Adalah Event Organizer dari Bandung yang bergerak mengadakan Event - Event seperti perlombaan dan juga acara hiburan lainnya, E- Sports, Sports, Live Music Jamming, Pentas Seni Musik, dan juga Seminar ataupun Workshop.
              Kami juga menerima pengurusan event seperti : Birthday Party / Sweet Seventeen, Anniversary Company / Community, kami juga begerak dibidang digital marketing bagi perusahaan perusahaan yang membutuhkan . Visi dan Misi yaitu
              mewadahi Player-player E - Sports yang tidak memiliki jalur untuk serius dibidangnya atau beralih ke Ranah Profesional. Kami berusaha meng Approach kepada Player-player Sekolah,Kampus dan juga Player-player Warung kopi yang
              ada di sekitar Bandung.
            </div>
          </div>
        </section>
        <section className="container mx-auto">
          <div className="text-center font-extrabold text-3xl mt-5">PORTFOLIO</div>
        </section>
      </main>
    </div>
  );
}

export default App;
