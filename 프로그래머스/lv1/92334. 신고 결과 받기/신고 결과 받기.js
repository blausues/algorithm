function solution(id_list, report, k) {
    // id의 index 값 저장
    const id_index_obj = id_list.reduce((acc, cur, i) => ({...acc, [cur]: i}), {});
    // {muzi: ['frodo']} {신고당한 id: [해당 id를 신고한 id array]}
    let report_count = {};
    
    report.forEach(v => {
        const [id, report_id] = v.split(' ');
        if (!report_count[report_id]) report_count[report_id] = new Set();
        report_count[report_id].add(id);
    })
    
    let result = new Array(id_list.length).fill(0);
    Object.keys(report_count).forEach(banned_id => {
        if (report_count[banned_id].size >= k) {
            report_count[banned_id].forEach(id => result[id_index_obj[id]]++)
        }
    });
    return result;
}