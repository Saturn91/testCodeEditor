import { Component } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestCodeEditor';

  theme = 'vs-dark';

  codeModel: CodeModel = {
    language: 'lua',
    uri: 'main.json',
    value: `-- your code --
function __init()
  --your init code
end

function __update()
  --your regulary called code
end

print('hello world')`,
  };

  options = {
    contextmenu: true,
    minimap: {
      enabled: true,
    },
  };

  onCodeChanged(value: string) {
    console.log('CODE', value);
  }
}
