import Banner from "@/components/Banner";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <main>
      <Banner />
      <Wrapper>
        <div className="text-center max-w-[800px]">
          <div>Explore Cookbook</div>
        </div>
      </Wrapper>
    </main>
  );
}
