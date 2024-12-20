let grades = [];

function addGrade() {
    // 取得 Math 和 English 輸入框
    const mathInput = document.getElementById('math');
    const englishInput = document.getElementById('english');

    // 將輸入的值轉換為數字
    const math = parseFloat(mathInput.value);
    const english = parseFloat(englishInput.value);

    // 確認輸入是否為有效數字
    if (isNaN(math) || isNaN(english)) {
        alert("Please enter valid numbers for Math and English.");
        return; // 停止執行後續程式
    }

    // 計算平均
    const average = ((math + english) / 2).toFixed(2);

    // 將成績儲存到陣列
    grades.push({ math, english, average: parseFloat(average) });

    // 清空輸入框
    mathInput.value = '';
    englishInput.value = '';

    // 顯示結果
    console.log(`Math: ${math}, English: ${english}, Average: ${average}`);
    renderTable(); // 呼叫函式來更新表格
}

// 更新網頁表格
function renderTable() {
    const tbody = document.getElementById('grades-body');
    tbody.innerHTML = ''; // 清空表格

    let mathTotal = 0;
    let englishTotal = 0;

    grades.forEach((grade, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${grade.math}</td>
            <td>${grade.english}</td>
            <td>${grade.average}</td>
        `;
        tbody.appendChild(row);

        mathTotal += grade.math;
        englishTotal += grade.english;
    });

    // 計算總平均
    const mathAvg = (mathTotal / grades.length).toFixed(2);
    const englishAvg = (englishTotal / grades.length).toFixed(2);
    const overallAvg = grades.reduce((sum, grade) => sum + grade.average, 0) / grades.length;

    document.getElementById('math-avg').textContent = mathAvg || '0.00';
    document.getElementById('english-avg').textContent = englishAvg || '0.00';
    document.getElementById('overall-avg').textContent = overallAvg.toFixed(2) || '0.00';
}
