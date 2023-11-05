
const createTable = () => {

    const theTable = document.getElementsByTagName('tbody')[0]
    const girlsData = {
        'יג 1': [
            { name: 'אפשטיין	מרים', phone: '02-9992613', address: 'שפת אמת 33/12', birthDate: 'ח\' שבט ס\"ה' },
            { name: 'הופמן תמר', phone: '02-9999275', address: 'נחל אוריה 10/6', birthDate: 'ד\' כסלו' },
            { name: 'יוליארד	יעל', phone: '02-9919390', address: 'אמרי אמת 2/20', birthDate: 'כ\"ג אדר א\' ס\"ה' },
            { name: 'לוגסי הדסה', phone: '02-5804196', address: 'כנסת מרדכי 7/5', birthDate: 'ט\' בניסן' },
            { name: 'לוי	חנה', phone: '02-9999477', address: 'נחל אוריה 11/7', birthDate: 'ד\' אדר ב\' ס\"ה' },
            { name: 'לוי	שרה', phone: '02-9995987', address: 'נחל רביבים 13/12', birthDate: 'כ\"ו ניסן ס\"ה' },
            { name: 'מלכין הדסה', phone: '02-9920352', address: 'ריב"ל 25/4', birthDate: 'י\"ז אדר ב\' ס\"ה' },
            { name: 'נעימי רות', phone: '02-5869573', address: 'נחל נחשון 3/10', birthDate: 'ג\' תמוז ס\"ה' },
            { name: 'עזאני אפרת', phone: '02-5002441', address: 'בן איש חי 36/9', birthDate: 'כ\"א תמוז ס\"ה' },
            { name: 'פינקלשטיין	אהובה', phone: '077-7915669', address: 'נריה הנביא 15/17', birthDate: 'ל\' תשרי ס\"ה' },
            { name: ' שוכמן	חנה מרים', phone: '02-6275505', address: 'החיד"א 7/6', birthDate: 'ז\' שבט ס\"ה' },
            { name: 'שושן מרים', phone: '02-5808053', address: 'כנסת ישראל 8/4', birthDate: 'ג\' חשוון ס\"ה' },
            { name: 'שכרוב אילה', phone: '02-9999512', address: 'רבי טרפון 7/5', birthDate: 'י\' אדר ס\"ה' },
        ],
        'יג 2': [
            { name: 'גברא שני', phone: '02-9998798', address: 'הרב שלמה לורנץ 3/12 כ ג', birthDate: 'ד\' חשוון ס\"ו' },
            { name: 'הלפגוט תמר', phone: '02-9910185', address: 'יואל הנביא 26/11', birthDate: 'כ\"ד אייר ס\"ה' },
            { name: 'והב	רות', phone: '02-9999973', address: 'שמואל הנביא 10/12', birthDate: 'ח\' אלול ס\"ה' },
            { name: 'מלכה רבקה', phone: '02-9995752', address: 'נחל רביבים 13/11', birthDate: 'ג\' כסליו ס\"ה' },
            { name: 'מנדלבוים אסתר', phone: '02-5803302', address: 'יסוד העבודה 5/4', birthDate: 'כ\"ה כסלו ס\"ה' },
            { name: ' סימן טוב רבקה תהילה', phone: '02-9924397', address: 'בן איש חי 27/14', birthDate: 'כ\' אדר ס\"ה' },
            { name: 'קליין מירל', phone: '072-2496669', address: 'חזון איש 14/14', birthDate: 'י\' אדר א\' ס\"ה' },
            { name: 'שמש	הדס', phone: '02-5800561', address: 'הרב שך 29/6', birthDate: 'כ\"ז אדר א\' ס\"ה' },
        ],
        'יג 3': [
            { name: 'אייזנבאך מלכה', phone: '02-5355891', address: 'תכלת מרדכי 4/19', birthDate: 'ב\' טבת ס\"ד' },
            { name: 'ברנשטיין חנה', phone: '077-3322662', address: 'תכלת מרדכי 9/1', birthDate: 'ה\' שבט' },
            { name: 'וויינר לאה', phone: '02-9419585', address: 'מחזיקי הדת 1/7', birthDate: 'כ\"ג תשרי ס\"ו' },
            { name: 'סגל	פייגא', phone: '077-7575900', address: 'אוהל יהושע 2/20', birthDate: 'כ\"ו תמוז ס\"ה' },
            { name: 'רוקח רייזי', phone: '077-3322554', address: 'תכלת מרדכי 4/7', birthDate: 'ו\' שבט תשס\"ה' },
            { name: 'שטרולי מרים', phone: '02-9923190', address: 'בן קיסמא 19/2', birthDate: 'כ\"ג כסלו תשס\"ו' },
        ]
    }


    const arrayOfTrs = Object.entries(girlsData).map(([classNumber, studentsArray]) => {
        studentsArray.forEach(student => {
            const trForThisStudent = document.createElement('tr');
            const regularTds = Object.values(student).map(value => {
                const currentTd = document.createElement('td')
                currentTd.innerText = value
                return currentTd
            })
            const classTdWithSpan = document.createElement('td');
            classTdWithSpan.setAttribute('rowspan', studentsArray.length)
            classTdWithSpan.innerText = classNumber
            trForThisStudent.append(studentsArray.indexOf(student) == 0 ? classTdWithSpan : '', ...regularTds)
            return theTable.appendChild(trForThisStudent)
        })

    })


}
