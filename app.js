(function () {
    // ---------- Dados ----------
    // Apenas nome + presences. pagar/receber são calculados automaticamente.
    const weeksData = [
        { name: "Semana 1 (01/01 - 07/01)", days: ["01/01","02/01","03/01","04/01","05/01","06/01","07/01"], participants: [
            { name: "Camilo",    presences: [0,1,1,0,0,0,0] },
            { name: "Claudinei", presences: [0,1,1,1,1,1,1] },
            { name: "Gustavo",   presences: [0,1,1,1,1,1,1] },
            { name: "Jheferson", presences: [0,1,1,1,1,0,1] },
            { name: "Paulo",     presences: [0,1,1,1,0,1,1] }
        ]},
        { name: "Semana 2 (08/01 - 14/01)", days: ["08/01","09/01","10/01","11/01","12/01","13/01","14/01"], participants: [
            { name: "Camilo",    presences: [0,1,0,1,1,1,0] },
            { name: "Claudinei", presences: [0,1,1,0,0,0,0] },
            { name: "Gustavo",   presences: [0,1,1,1,1,1,1] },
            { name: "Jheferson", presences: [0,1,1,1,0,1,1] },
            { name: "Paulo",     presences: [0,0,1,1,0,1,0] }
        ]},
        { name: "Semana 3 (15/01 - 21/01)", days: ["15/01","16/01","17/01","18/01","19/01","20/01","21/01"], participants: [
            { name: "Camilo",    presences: [1,0,0,0,0,0,0] },
            { name: "Claudinei", presences: [0,1,1,1,1,1,1] },
            { name: "Gustavo",   presences: [0,1,1,1,1,1,1] },
            { name: "Jheferson", presences: [1,1,1,0,0,1,1] },
            { name: "Paulo",     presences: [0,1,0,0,1,0,0] }
        ]},
        { name: "Semana 4 (22/01 - 28/01)", days: ["22/01","23/01","24/01","25/01","26/01","27/01","28/01"], participants: [
            { name: "Camilo",    presences: [0,0,0,0,0,0,0] },
            { name: "Claudinei", presences: [0,1,1,1,1,1,1] },
            { name: "Gustavo",   presences: [1,1,1,1,1,1,1] },
            { name: "Jheferson", presences: [1,1,0,1,1,1,0] },
            { name: "Paulo",     presences: [0,1,0,0,1,1,0] }
        ]},
        { name: "Semana 5 (29/01 - 04/02)", days: ["29/01","30/01","31/01","01/02","02/02","03/02","04/02"], participants: [
            { name: "Claudinei", presences: [0,1,1,0,1,1,1] },
            { name: "Edmar",     presences: [0,1,1,1,1,1,0] },
            { name: "Gustavo",   presences: [0,1,1,1,1,1,1] },
            { name: "Jheferson", presences: [0,1,1,1,1,0,1] },
            { name: "Paulo",     presences: [0,0,1,1,1,1,1] },
            { name: "Pierre",    presences: [0,0,0,0,0,0,0] }
        ]},
        { name: "Semana 6 (05/02 - 11/02)", days: ["05/02","06/02","07/02","08/02","09/02","10/02","11/02"], participants: [
            { name: "Claudinei", presences: [0,1,0,1,1,1,1] },
            { name: "Edmar",     presences: [0,1,1,1,1,0,0] },
            { name: "Gustavo",   presences: [0,1,1,1,1,1,0] },
            { name: "Jheferson", presences: [0,1,1,1,0,1,1] },
            { name: "Paulo",     presences: [0,1,1,1,1,1,1] },
            { name: "Pierre",    presences: [0,0,0,0,0,0,0] }
        ]},
        { name: "Semana 7 (12/02 - 18/02)", days: ["12/02","13/02","14/02","15/02","16/02","17/02","18/02"], participants: [
            { name: "Claudinei", presences: [0,1,1,1,1,1,1] },
            { name: "Edmar",     presences: [0,0,0,1,1,0,0] },
            { name: "Gustavo",   presences: [1,1,1,0,1,1,1] },
            { name: "Jheferson", presences: [0,1,1,0,0,1,1] },
            { name: "Paulo",     presences: [0,1,1,1,0,1,1] }
        ]},
        { name: "Semana 8 (19/02 - 25/02)", days: ["19/02","20/02","21/02","22/02","23/02","24/02","25/02"], participants: [
            { name: "Claudinei", presences: [0,0,1,1,1,1,1] },
            { name: "Edmar",     presences: [0,1,1,1,1,1,0] },
            { name: "Gustavo",   presences: [1,1,1,1,1,1,1] },
            { name: "Jheferson", presences: [0,1,1,1,1,1,0] },
            { name: "Paulo",     presences: [0,1,1,1,1,1,0] }
        ]},
        { name: "Semana 9 (26/02 - 04/03)", days: ["26/02","27/02","28/02","01/03","02/03","03/03","04/03"], participants: [
            { name: "Claudinei", presences: [0,1,1,1,1,1,1] },
            { name: "Edmar",     presences: [0,1,1,0,1,1,0] },
            { name: "Gustavo",   presences: [1,1,1,1,0,0,1] },
            { name: "Jheferson", presences: [0,0,1,1,0,1,1] },
            { name: "Juliano",   presences: [1,1,1,1,1,0,0] },
            { name: "Luciano",   presences: [0,1,1,1,1,0,0] },
            { name: "Marcos",    presences: [1,1,1,0,1,1,0] },
            { name: "Paulo",     presences: [0,1,1,1,1,1,0] }
        ]},
        { name: "Semana 10 (05/03 - 11/03)", days: ["05/03","06/03","07/03","08/03","09/03","10/03","11/03"], participants: [
            { name: "Claudinei", presences: [0,1,1,1,1,1,0] },
            { name: "Edmar",     presences: [0,1,1,0,1,0,1] },
            { name: "Gustavo",   presences: [0,1,1,1,1,1,1] },
            { name: "Jheferson", presences: [0,1,1,1,1,0,1] },
            { name: "Juliano",   presences: [0,1,1,0,1,1,1] },
            { name: "Luciano",   presences: [0,1,1,1,1,1,0] },
            { name: "Marcos",    presences: [0,1,1,1,1,1,0] },
            { name: "Paulo",     presences: [0,1,0,1,1,0,0] }
        ]}
    ];

    // ---------- Cálculo financeiro automático ----------
    // Regra: mínimo 5 presenças para ser elegível.
    // Abaixo de 5: paga (5 - presenças) * R$10 (máx R$50 com 0 presenças).
    // Elegíveis recebem o pot proporcional às suas presenças.
    function calcWeekFinancials(week) {
        const MINIMO = 5;
        const MULTA_POR_DIA = 10;

        const counts = week.participants.map(p => p.presences.filter(v => v === 1).length);

        // pot = soma das multas de quem não atingiu o mínimo
        let pot = 0;
        counts.forEach(c => {
            if (c < MINIMO) pot += (MINIMO - c) * MULTA_POR_DIA;
        });

        // total de presenças dos elegíveis
        const totalEligiblePresences = counts.reduce((acc, c) => acc + (c >= MINIMO ? c : 0), 0);

        return week.participants.map((p, i) => {
            const c = counts[i];
            if (c >= MINIMO) {
                return {
                    ...p,
                    pagar: 0,
                    receber: totalEligiblePresences > 0 ? (c / totalEligiblePresences) * pot : 0
                };
            } else {
                return {
                    ...p,
                    pagar: (MINIMO - c) * MULTA_POR_DIA,
                    receber: 0
                };
            }
        });
    }

    // Aplica o cálculo em todas as semanas
    weeksData.forEach(week => {
        week.participants = calcWeekFinancials(week);
    });

    // ---------- Setup ----------
    const allParticipantsSet = new Set();
    weeksData.forEach(week => week.participants.forEach(p => allParticipantsSet.add(p.name)));
    const allParticipants = Array.from(allParticipantsSet).sort();

    const weeksContainer  = document.getElementById('weeksContainer');
    const filterSelect    = document.getElementById('participantFilter');
    const rankingList     = document.getElementById('ranking-list');
    const statsCards      = document.getElementById('stats-cards');
    const totalFundSpan   = document.getElementById('totalFund');

    allParticipants.forEach(name => {
        const opt = document.createElement('option');
        opt.value = name;
        opt.textContent = name;
        filterSelect.appendChild(opt);
    });

    let collapsedWeeks = new Array(weeksData.length).fill(window.innerWidth < 600);

    // ---------- Renderização das semanas ----------
    function renderWeeks(filterValue = 'all') {
        let htmlStr = '';
        weeksData.forEach((week, idx) => {
            const collapsedClass = collapsedWeeks[idx] ? 'collapsed' : '';
            let rows = '';
            week.participants.forEach(p => {
                const highlight = (filterValue !== 'all' && p.name === filterValue)
                    ? 'style="background: rgba(150, 120, 255, 0.15);"'
                    : '';
                let daysCells = '';
                p.presences.forEach(val => {
                    const cls = val === 1 ? 'dot-present' : 'dot-absent';
                    daysCells += `<td class="presence-cell"><span class="${cls}" title="${val === 1 ? 'Presente' : 'Falta'}"></span></td>`;
                });
                const presCount = p.presences.filter(v => v === 1).length;
                rows += `<tr ${highlight}>
                    <td class="participant-name">${p.name}</td>
                    ${daysCells}
                    <td><span class="badge-presence">${presCount}</span></td>
                    <td class="financial negative">R$ ${p.pagar.toFixed(2)}</td>
                    <td class="financial positive">R$ ${p.receber.toFixed(2)}</td>
                </tr>`;
            });

            htmlStr += `<div class="week-card ${collapsedClass}" data-week="${idx}">
                <div class="week-header" onclick="toggleWeek(${idx})">
                    <span class="week-title">${week.name}</span>
                    <span class="week-toggle"><i class="fa-solid fa-chevron-${collapsedWeeks[idx] ? 'down' : 'up'}"></i></span>
                </div>
                <div class="week-table-wrapper">
                    <table class="week-table">
                        <thead>
                            <tr><th>Participante</th>${week.days.map(d => `<th>${d}</th>`).join('')}<th>Presenças</th><th>A pagar</th><th>A receber</th></tr>
                        </thead>
                        <tbody>${rows}</tbody>
                    </table>
                </div>
            </div>`;
        });
        weeksContainer.innerHTML = htmlStr;
    }

    window.toggleWeek = function (idx) {
        collapsedWeeks[idx] = !collapsedWeeks[idx];
        renderWeeks(filterSelect.value);
    };

    // ---------- Estatísticas e ranking ----------
    function computeStats() {
        let totalPresenceSum = 0;
        const presenceMap = new Map();

        weeksData.forEach(week => {
            week.participants.forEach(p => {
                const presCount = p.presences.filter(v => v === 1).length;
                totalPresenceSum += presCount;
                presenceMap.set(p.name, (presenceMap.get(p.name) || 0) + presCount);
            });
        });

        // acumular pagar/receber por participante
        const pagarMap   = new Map();
        const receberMap = new Map();
        weeksData.forEach(week => {
            week.participants.forEach(p => {
                pagarMap.set(p.name,   (pagarMap.get(p.name)   || 0) + p.pagar);
                receberMap.set(p.name, (receberMap.get(p.name) || 0) + p.receber);
            });
        });

        // ranking ordenado por presenças
        const ranking = Array.from(presenceMap.entries()).sort((a, b) => b[1] - a[1]);

        // totais
        const totPresencas = ranking.reduce((acc, [name]) => acc + (presenceMap.get(name) || 0), 0);
        const totPago      = ranking.reduce((acc, [name]) => acc + (pagarMap.get(name)    || 0), 0);
        const totGanho     = ranking.reduce((acc, [name]) => acc + (receberMap.get(name)  || 0), 0);
        const totSaldo     = totGanho - totPago;
        const totSaldoClass = totSaldo >= 0 ? 'rank-saldo-pos' : 'rank-saldo-neg';
        const totSaldoSinal = totSaldo >= 0 ? '+' : '';

        rankingList.innerHTML = `
            <li class="ranking-item ranking-header">
                <span class="rc-pos"></span>
                <span class="rc-name">Nome</span>
                <span class="rc-num">Presenças</span>
                <span class="rc-num">Pago</span>
                <span class="rc-num">Recebido</span>
                <span class="rc-num">Saldo</span>
            </li>
            ${ranking.map(([name, count], i) => {
                const pago  = pagarMap.get(name)   || 0;
                const ganho = receberMap.get(name) || 0;
                const saldo = ganho - pago;
                const saldoClass = saldo >= 0 ? 'rank-saldo-pos' : 'rank-saldo-neg';
                const saldoSinal = saldo >= 0 ? '+' : '';
                return `<li class="ranking-item">
                    <span class="rc-pos">#${i + 1}</span>
                    <span class="rc-name">${name}</span>
                    <span class="rc-num">${count}</span>
                    <span class="rc-num rank-debito">R$&nbsp;${pago.toFixed(2)}</span>
                    <span class="rc-num rank-credito">R$&nbsp;${ganho.toFixed(2)}</span>
                    <span class="rc-num ${saldoClass}">${saldoSinal}R$&nbsp;${saldo.toFixed(2)}</span>
                </li>`;
            }).join('')}
            <li class="ranking-item ranking-total">
                <span class="rc-pos"></span>
                <span class="rc-name">Total</span>
                <span class="rc-num">${totPresencas}</span>
                <span class="rc-num rank-debito">R$&nbsp;${totPago.toFixed(2)}</span>
                <span class="rc-num rank-credito">R$&nbsp;${totGanho.toFixed(2)}</span>
                <span class="rc-num ${totSaldoClass}">${totSaldoSinal}R$&nbsp;${totSaldo.toFixed(2)}</span>
            </li>
        `;

        // cards
        const mediaPresencas = (totalPresenceSum / allParticipants.length).toFixed(1);
        statsCards.innerHTML = `
            <div class="stat-card"><div class="stat-icon"><i class="fa-solid fa-users"></i></div><div class="stat-info"><h3>${allParticipants.length}</h3><span>participantes</span></div></div>
            <div class="stat-card"><div class="stat-icon"><i class="fa-solid fa-calendar-check"></i></div><div class="stat-info"><h3>${totalPresenceSum}</h3><span>presenças totais</span></div></div>
            <div class="stat-card"><div class="stat-icon"><i class="fa-solid fa-chart-line"></i></div><div class="stat-info"><h3>${mediaPresencas}</h3><span>média/pessoa</span></div></div>
        `;

        // fundo total (arrecadado - distribuído)
        let totalPagar = 0, totalReceber = 0;
        weeksData.forEach(w => w.participants.forEach(p => {
            totalPagar  += p.pagar;
            totalReceber += p.receber;
        }));
        totalFundSpan.innerText = `R$ ${(totalPagar - totalReceber).toFixed(2)}`;
    }

    // ---------- Gráfico ----------
    function renderChart() {
        const ctx = document.getElementById('attendanceChart').getContext('2d');
        const labels = weeksData.map((_, i) => `S${i + 1}`);
        const weeklyPresences = weeksData.map(week =>
            week.participants.reduce((acc, p) => acc + p.presences.filter(v => v === 1).length, 0)
        );
        const weeklyAbsences = weeksData.map(week =>
            week.participants.reduce((acc, p) => acc + p.presences.filter(v => v === 0).length, 0)
        );
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels,
                datasets: [
                    {
                        label: 'Presenças',
                        data: weeklyPresences,
                        backgroundColor: 'rgba(154, 255, 192, 0.75)',
                        borderColor: '#9affc0',
                        borderWidth: 1,
                        stack: 'stack'
                    },
                    {
                        label: 'Faltas',
                        data: weeklyAbsences,
                        backgroundColor: 'rgba(255, 112, 112, 0.65)',
                        borderColor: '#ff7070',
                        borderWidth: 1,
                        stack: 'stack'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { labels: { color: '#ccc' } } },
                scales: {
                    y: { min: 0, stacked: true, grid: { color: '#333' }, ticks: { color: '#aaa' } },
                    x: { stacked: true, ticks: { color: '#aaa' } }
                }
            }
        });
    }

    function renderRadarChart() {
        // Agrupa presenças e faltas por dia da semana (Seg a Dom)
        const dayLabels = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
        const presences = new Array(7).fill(0);
        const absences  = new Array(7).fill(0);

        weeksData.forEach(week => {
            week.days.forEach((dateStr, dayIdx) => {
                const [dd, mm] = dateStr.split('/').map(Number);
                const jsDay = new Date(2026, mm - 1, dd).getDay(); // 0=Dom,1=Seg,...,6=Sáb
                const ourIdx = jsDay === 0 ? 6 : jsDay - 1;       // Dom→6, Seg→0 ... Sáb→5
                week.participants.forEach(p => {
                    if (p.presences[dayIdx] === 1) presences[ourIdx]++;
                    else                           absences[ourIdx]++;
                });
            });
        });

        const ctx = document.getElementById('radarChart').getContext('2d');
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: dayLabels,
                datasets: [
                    {
                        label: 'Presenças',
                        data: presences,
                        borderColor: '#9affc0',
                        backgroundColor: 'rgba(154, 255, 192, 0.18)',
                        pointBackgroundColor: '#9affc0',
                        borderWidth: 2
                    },
                    {
                        label: 'Faltas',
                        data: absences,
                        borderColor: '#ff7070',
                        backgroundColor: 'rgba(255, 112, 112, 0.13)',
                        pointBackgroundColor: '#ff7070',
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { labels: { color: '#ccc', font: { size: 11 } } } },
                scales: {
                    r: {
                        min: 0,
                        grid:         { color: '#3a3555' },
                        angleLines:   { color: '#3a3555' },
                        pointLabels:  { color: '#b3abeb', font: { size: 12 } },
                        ticks:        { color: '#888', backdropColor: 'transparent', stepSize: 10 }
                    }
                }
            }
        });
    }

    filterSelect.addEventListener('change', e => renderWeeks(e.target.value));

    // ---------- Inicialização ----------
    renderWeeks('all');
    computeStats();
    renderChart();
    renderRadarChart();

})();
