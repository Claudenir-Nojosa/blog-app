import CardList from "@/components/root/CardList";
import CategoryList from "@/components/root/CategoryList";
import Featured from "@/components/root/Featured";
import Menu from "@/components/root/Menu";

export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}
