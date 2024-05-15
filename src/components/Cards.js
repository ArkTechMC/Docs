export function Entry({ link, name, content }) {
    return (<div class="project">
        <div class="flex">
            <b><a href={link} target="_blank" rel="noopener noreferrer">{name}</a></b>
            <p>{content}</p>
        </div>
    </div>);
}