export function renderNavbar(activePage) {
    const navbarHTML = `
    <header style="background: rgba(23, 25, 28, 0.94); backdrop-filter: blur(14px); color: #fff; padding: 10px 26px; display: flex; align-items: center; position: sticky; top: 0; z-index: 50;">
        <div style="font-weight: bold; font-size: 18px; color: #19a8e6;">Cosmoworld</div>
        <nav style="margin-left: auto; display: flex; gap: 22px; font-size: 14px;">
            <a href="/index.html" style="color: ${activePage === 'home' ? '#fff' : '#d1d5db'}; text-decoration: none;">메인</a>
            <a href="/pages/cs.html" style="color: ${activePage === 'cs' ? '#fff' : '#d1d5db'}; text-decoration: none;">CS 접수</a>
            <a href="/pages/as.html" style="color: ${activePage === 'as' ? '#fff' : '#d1d5db'}; text-decoration: none;">AS 처리</a>
            <a href="/pages/acc.html" style="color: ${activePage === 'acc' ? '#fff' : '#d1d5db'}; text-decoration: none;">회계</a>
            <a href="/pages/admin.html" style="color: ${activePage === 'admin' ? '#fff' : '#d1d5db'}; text-decoration: none;">대시보드</a>
        </nav>
    </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}
