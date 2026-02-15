export async function fetchCSV(url) {
    try {
        const res = await fetch(url);
        const text = await res.text();
        return text.split(/\r?\n/).slice(1)
            .map(r => r.split(",")[0].replace(/^"|"$/g, "").trim())
            .filter(v => v);
    } catch (err) {
        console.error("CSV 로드 실패:", err);
        return [];
    }
}
