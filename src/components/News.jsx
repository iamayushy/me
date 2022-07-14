import { useEffect, useState } from "react";

const News = () => {
  const [data, setdata] = useState([]);
  const [search, setSearch] = useState("");
  const news = async (search) => {
    const url = `https://gnews.io/api/v4/search?q=${search}&token=1bbae6c09f7ce7c8a4d9a5e7f58913e7&lang=en`;

    const respones = await fetch(url);
    const data = await respones.json();
    setdata(data.articles);
  };

  useEffect(() => {
    news(search);
    console.log(data);
  }, [search]);
  console.log(data);

  return (
    <div>
      <section className="search">
        <h2>The Top News</h2>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          search
          news
          by
          name
        />
      </section>
      <div className="layer">
        {data &&
          data.map((ele) => {
            return (
              <div className="card">
                <img src={ele.image} alt="pics" height="180px" width="300px" />
                <h3 className="c-head">{ele.title}</h3>
                <p className="d-head">{ele.description}</p>
                <p className="con-head">{ele.content}</p>
                <a href={ele.url}>Complete</a>
                <p>Publisher : {ele.source.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export { News };
