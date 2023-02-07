import '../css/style.css';
import Shortcuts from './Shortcuts';
import Menubar from './Menubar';
import Windows from './Windows';
import Resizable  from './Resizable';

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