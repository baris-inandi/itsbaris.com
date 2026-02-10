type DemoCase = {
  name: string;
  inputSrc: string;
  outputSrc: string;
};

const demoCases: DemoCase[] = [
  {
    name: "test1.mp4",
    inputSrc: "/odana/test-in/test1.gif",
    outputSrc: "/odana/test-out/skeleton.test1.mp4.gif",
  },
  {
    name: "test2.mp4",
    inputSrc: "/odana/test-in/test2.gif",
    outputSrc: "/odana/test-out/skeleton.test2.mp4.gif",
  },
  {
    name: "test3.mp4",
    inputSrc: "/odana/test-in/test3.gif",
    outputSrc: "/odana/test-out/skeleton.test3.mp4.gif",
  },
];

export default function OdanaDemoPage() {
  return (
    <main className="mx-auto w-full max-w-[1200px] px-4 py-8 sm:px-8">
      {demoCases.map((demoCase, index) => (
        <section key={demoCase.name} className={index === 0 ? "" : "mt-10"}>
          <h2 className="mb-4 text-2xl font-bold text-stone-800">{demoCase.name}</h2>

          <div className="overflow-hidden rounded border border-stone-300">
            <table className="w-full table-fixed border-collapse">
              <thead>
                <tr>
                  <th className="w-1/2 border border-stone-300 bg-stone-100 p-4 text-center font-semibold text-stone-700">
                    Input
                  </th>
                  <th className="w-1/2 border border-stone-300 bg-stone-100 p-4 text-center font-semibold text-stone-700">
                    Output
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-stone-300 p-4 align-middle">
                    <img
                      src={demoCase.inputSrc}
                      alt={`${demoCase.name} input`}
                      className="mx-auto block h-auto max-w-full"
                    />
                  </td>
                  <td className="border border-stone-300 p-4 align-middle">
                    <img
                      src={demoCase.outputSrc}
                      alt={`${demoCase.name} output`}
                      className="mx-auto block h-auto max-w-full"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </main>
  );
}
