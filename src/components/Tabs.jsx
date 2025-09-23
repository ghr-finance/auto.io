export default function Tabs({ active, setActive }) {
    return (
        <div className="tabs">
            <button
                className={active === "bulan" ? "active" : ""}
                onClick={() => setActive("bulan")}
            >
                Per Bulan
            </button>
            <button
                className={active === "pic" ? "active" : ""}
                onClick={() => setActive("pic")}
            >
                Per PIC
            </button>
            <button
                className={active === "detail" ? "active" : ""}
                onClick={() => setActive("detail")}
            >
                Detail
            </button>
        </div>
    );
}
