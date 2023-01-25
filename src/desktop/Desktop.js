import '../css/Desktop.css';
import Shortcuts from './Shortcuts';
import Menubar from './Menubar';
import Windows from './Windows';

function Desktop() {
    return(
        <div className="wallpaper">
            <Shortcuts/>
            <Windows/>
            <Menubar/>
        </div>
    );
}

export default Desktop;