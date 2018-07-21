window.alert('Gør dig klar til at modtage dit emne for aftenens tale')
var questions = ['Elon Musk', 'Koriander, Oliven og Kaffe', 'Nostalgi', 'Romkuglen', 'Restoration af offentlige områder', 'Det gode og det onde', 'Deodorant og barbergrej', 'Yoga', 'Det er snart jul', 'Trump og det postmoderne', 'Meg Ryan - En reprise', 'Den visuelle kultur og de sociale medier']
var randomQuestion = questions[Math.floor(Math.random() * questions.length)]

document.write(randomQuestion)
