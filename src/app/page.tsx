'use client'

export default function Home() {

  const sendEmail = () => {
    window.open('mailto:mercadobmxbr@gmail.com');
  }

  return (
    <body className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <h1>Deletar conta do <strong>Mercado Bmx Br</strong></h1>
        <h3 className="mb-10">Clique no botão abaixo para entrar em contato conosco</h3>
        <button className="bg-red-500 p-2 rounded-3xl" onClick={sendEmail}>
        Entrar em contato.
        </button>
      </div>
    </body>
  );
}
