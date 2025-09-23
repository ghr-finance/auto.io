export default function Table({ data }) {
    if (!data || data.length === 0) {
        return <p className="empty">Tidak ada data.</p>;
    }

    const keys = Object.keys(data[0]);

    return (
        <table className="report-table">
            <thead>
                <tr>
                    {keys.map((k) => (
                        <th key={k}>{k}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, idx) => (
                    <tr key={idx}>
                        {keys.map((k) => (
                            <td key={k}>{row[k]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
