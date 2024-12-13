function DownloadLink({name, link, children}){
    return (
        <>
        <a download={name} href={link}>{children}</a>
        </>
    );
};

export {DownloadLink};