import Image from "next/image";

export default function Monk() {
  return (
    <div className="prose prose-invert max-w-none">
      <Image
        className="scale-110"
        src="/readassets/ibps_screenshot.webp"
        alt="Screenshot of the IBPS IDE"
        width={1000}
        height={1000}
      />
      <span className="text-sm">
        Go to <a href="https://ibps.inandioglu.com">ibps.inandioglu.com</a> to use the
        IBPS IDE.
      </span>

      <h1>The IBPS Programming Language and IDE</h1>

      <p>
        The International Baccalaureate (IB) Diploma Program Computer Science course has a
        very specific Pseudocode specification. I created the IBPS programming language,
        which is fully compliant with the IB Pseudocode specification:
      </p>

      <ul>
        <li>
          <a href="https://ib.compscihub.net/wp-content/uploads/2015/04/IB-Pseudocode-rules-more.pdf">
            Approved notation for devleoping pseudocode, the IB Organization
          </a>
        </li>
        <li>
          <a href="https://ib.compscihub.net/wp-content/uploads/2015/04/IB-Pseudocode-rules.pdf">
            Pseudocode in Examinations, the IB Organization
          </a>
        </li>
      </ul>

      <p>The IBPS IDE is the easiest way to write, run, and share IBPS code:</p>
      <ul>
        <li>
          Visit <a href="https://ibps.inandioglu.com">ibps.inandioglu.com</a> to use the
          IBPS IDE.
        </li>
        <li>
          or see <a href="https://github.com/baris-inandi/ibps">the GitHub repo</a> to see
          the source code.
        </li>
      </ul>
    </div>
  );
}
