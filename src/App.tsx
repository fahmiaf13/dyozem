import { Navbar, Carousel } from "./components";
import BackgroundImage from "@/assets/about/bg.jpg";
import LogoBlack from "@/assets/about/dyozem.png";
import FirstImg from "@/assets/portfolio/1u.jpg";
import SecondImg from "@/assets/portfolio/2.jpeg";
import ThirdImg from "@/assets/portfolio/3.jpeg";
import FourthImg from "@/assets/portfolio/4.jpeg";
import FifthImg from "@/assets/portfolio/5.jpeg";
import { imgClients } from "./assets/clients";
import { Icon } from "@iconify/react";

// import Videos from "@/assets/portfolio/video1.mp4";

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
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex justify-center">
              <img src={LogoBlack} alt="" className="w-full" />
            </div>
            <div className="w-full md:w-1/2 flex items-center">
              Kami Adalah Event Organizer dari Bandung yang bergerak mengadakan Event - Event seperti perlombaan dan juga acara hiburan lainnya, E- Sports, Sports, Live Music Jamming, Pentas Seni Musik, dan juga Seminar ataupun Workshop.
              Kami juga menerima pengurusan event seperti : Birthday Party / Sweet Seventeen, Anniversary Company / Community, kami juga begerak dibidang digital marketing bagi perusahaan perusahaan yang membutuhkan . Visi dan Misi yaitu
              mewadahi Player-player E - Sports yang tidak memiliki jalur untuk serius dibidangnya atau beralih ke Ranah Profesional. Kami berusaha meng Approach kepada Player-player Sekolah,Kampus dan juga Player-player Warung kopi yang
              ada di sekitar Bandung.
            </div>
          </div>
        </section>
        <section className="container mx-auto">
          <div className="text-center font-extrabold text-3xl mt-5">PORTFOLIO</div>
          <div className="flex ">
            <div className="flex flex-wrap">
              {/* {portfolioImg.map((item, index) => {
                <img key={index} src={item.src} alt={item.alt} />;
              })} */}
              <img src={FirstImg} className="p-2 w-6/12" />
              <img src={SecondImg} className="p-2 w-6/12" />
              <img src={ThirdImg} className="p-2 w-6/12" />
              <img src={FourthImg} className="p-2 w-6/12" />
              <img src={FifthImg} className="p-2 w-full" />
              {/* <video controls autoPlay src={Videos} type="video/mp4" /> */}
            </div>
          </div>
        </section>
        <section className="container mx-auto">
          <div className="text-center font-extrabold text-3xl">SPONSORS</div>
          <div className="flex justify-center">
            <div className="w-7/12">
              <Carousel>
                {imgClients.map((hero) => (
                  <div key={hero.id} className="p-5 max-h-[200px] transition duration-300 ease-in flex items-center">
                    <img className="object-center w-32" src={hero.src} alt="Hero Image" />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </section>
        <section className="container mx-auto">
          <div className="flex gap-10 text-lg">
            <div>
              <div className="font-bold">Phone</div>
              <div className="flex items-center gap-1">
                <Icon icon="ic:outline-phone" width={24} />
                <div>+62 819-1205-1103</div>
              </div>
            </div>
            <div>
              <div className="font-bold">Email</div>
              <div className="flex items-center gap-1">
                <Icon icon="ic:outline-email" width={24} />
                <div>dyozemeventorganizer@gmail.com</div>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto">
          <footer className="w-full py-10">
            <div className="text-center opacity-50 font-light">© Copyright Dyozem.</div>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;
