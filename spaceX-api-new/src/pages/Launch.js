import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Launch = async () => {
    const id = getHash();
    const launch = await getData(id);

    if (!launch) {
        return `<div class="Error404">Launch not found</div>`;
    }

    const view = `
        <div class="Characters-inner">
            <article class="Character-card">
                <img src="${launch.links.patch.small}" alt="${launch.name}">
                <h2>${launch.name}</h2>
            </article>

            <article class="Characters-card">
                <h3>Failures: <span>${launch.failures ? launch.failures.length : 'None'}</span></h3>
                <h3>Details: <span>${launch.details || 'No details available'}</span></h3>
                <h3>Flight number: <span>${launch.flight_number || 'N/A'}</span></h3>
                <h3>Date: <span>${launch.date_utc || 'N/A'}</span></h3>
            </article>
        </div> 
    `;
    return view;
};
export default Launch;