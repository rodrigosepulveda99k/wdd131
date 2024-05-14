const full = document.querySelector("#lastModified");

const today = new Date();

full.innerHTML = `Last Modification: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(today)}</span>`;