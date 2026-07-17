async function fetchLastUpdatedDate() {
    const username = 'jpedrooliveira-dl'
    const repo = 'joaopedrooliveira'


    const url = `https://api.github.com/repos/jpedrooliveira-dl/joaopedrooliveira/commits/main`

    try {
        const response = await fetch(url)
        if (!response.ok) throw new Error("Não foi possivel obter os dados do GitHub!")

        const data = await response.json()

        const commitDateString = data.commit.author.date
        const commitDate = new Date(commitDateString)

        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        const formattedDate = commitDate.toLocaleDateString('en-US', options)

        document.querySelector('.date-atualizacao').textContent = formattedDate
    } catch (error) {
        console.error("Erro ao busca a data do commit:", error)
        document.querySelector('.date-atualizacao').textContent = "Recently"
    }
}

document.addEventListener("DOMContentLoaded", fetchLastUpdatedDate)