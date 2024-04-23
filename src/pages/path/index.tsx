import { useRouter } from "next/router";

const Path = () => {
  console.log("carico path");

  const router = useRouter();

  const goBack = () => {
    router.push("/");
  };

  return (
    <>
      <span>Pagina Path alla quale accedo aggiungendo /path nell url</span>
      <br />
      <button onClick={goBack}>Indietro</button>
    </>
  );
};

export default Path;
