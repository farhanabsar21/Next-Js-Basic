import Head from "next/head";
import Link from "next/link"
import style from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
    <Head>
      <title>People List | Home</title>
    </Head>
    <div>
      <h1 className={style.title}>Hi, This is my new Next Js</h1>
      <p className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, pariatur. Corrupti delectus commodi, ea inventore architecto rem rerum repudiandae porro?</p>
      <p className={style.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit cupiditate dolor dolores labore soluta, odio esse dolorem rem fuga accusamus, porro doloribus error architecto reiciendis alias nulla optio corporis voluptas eum libero neque officia quis est! Fugit quidem aliquam modi!
      </p>
      <Link href="/ninjas"><a className={style.btn}>See People Listing</a></Link>
    </div>
    </>
  )
}
