<template>
  <window :application="application">
    <section class="terminal" ref="terminal"></section>
  </window>
</template>

<script>
  import Window from './../includes/Window';
  import $ from 'jquery';
  import skills from './../../../../config/skills';
  import educations from './../../../../config/educations';

  export default ({
    props: [
      'application'
    ],

    components: {
      Window
    },

    data() {
      return {
        // Declare all messages.
        info: {
          prefix: '$> ',
          welcomeText: 'Hi, I\'m your personal CV-assistant.\n' +
            'Call <span>/info</span> for information.',
          infoCommandHeader: 'All available commands: ',
          undefinedCommandText: 'Undefined command.',
          startEmulateJSMessage: 'Start emulate... Enter <span>exit</span> for exit.',
          endEmulateJSMessage: 'End emulate...'
        },

        // Declare all available commands.
        commands: [
          {name: '/info', info: 'Show all available commands.', call: this.callInfoCommand},
          {name: '/educations', info: 'Show my educations.', call: this.callEducationsCommand},
          {name: '/skills', info: 'Show my skills.', call: this.callSkillsCommand},
          {name: '/clear', info: 'Show my skills.', call: this.callClearCommand},
          {name: '/js', info: 'Emulate JS scripts.', call: this.callEmulateJsCommand},
        ],

        hiddenCommands: [
          {name: 'exit', call: this.exitEmulateJSCommand},
        ],

        // Declare window settings.
        emulateMode: false,

        // Declare user variables.
        textCommand: '',
      }
    },

    mounted() {
      // Show welcome.
      this.sayHello();

      // Init events.
      this.init();
    },

    methods: {
      // Print messages.
      sayHello() {
        this.printResponse(this.info.welcomeText);
        this.printCommand();
      },

      printInfo(text) {
        this.appendMessage(`<p class="info">${text || ''}</p>`);
      },

      printCommand(text) {
        this.appendMessage(`<p class="command">${text || ''}</p>`);
      },

      printResponse(text) {
        this.appendMessage(`<p class="response">${text || ''}</p>`);
      },

      appendMessage(html) {
        this.$refs.terminal.insertAdjacentHTML('beforeend', html);
      },

      writingText(text) {
        $(this.$refs.terminal).find('.command:last-child').html(text || '');
      },

      // Commands action.
      callCommand(command) {
        for (let i in this.hiddenCommands) {
          if (this.hiddenCommands[i].name === command) {
            return this.hiddenCommands[i].call(this.hiddenCommands[i]);
          }
        }

        if (this.emulateMode) {
          return this.emulateJsCommand(command);
        }

        for (let i in this.commands) {
          if (this.commands[i].name === command) {
            return this.commands[i].call(this.commands[i]);
          }
        }

        return this.callUndefinedCommand();
      },

      callInfoCommand() {
        let text = this.info.infoCommandHeader + '<br><br>';
        for (let i in this.commands) {
          text += this.commands[i].name + ' - ' + this.commands[i].info + '<br>'
        }

        this.printResponse(text);
        this.printCommand();
      },

      callEducationsCommand() {
        let text = '';
        text += '<br><span>My Educations:</span><br><br>';
        for (let education of educations) {
          text += '- '
            + education.dateStart
            + '-' + education.dateEnd
            + ':<br> ' + education.title
            + ' - ' + education.name
            + '<br>'
        }

        this.printResponse(text);
        this.printCommand();
      },

      callSkillsCommand() {
        let text = '';
        text += '<br><span>My Skills:</span><br><br>';
        for (let skill of skills) {
          text += '- '
            + skill.name
            + ': ' + skill.percent + '%'
            + ' (' + skill.time + ')'
            + '<br>'
        }

        this.printResponse(text);
        this.printCommand();
      },

      callClearCommand() {
        $('.terminal').empty();
        this.sayHello();
      },

      callUndefinedCommand() {
        this.printResponse(this.info.undefinedCommandText);
        this.printCommand();
      },

      callEmulateJsCommand() {
        this.printResponse(this.info.startEmulateJSMessage);
        this.emulateMode = true;
        this.printCommand();
      },

      emulateJsCommand() {
        try {
          this.printResponse(eval(this.textCommand));
        } catch (e) {
          this.printResponse(e);
        }

        this.printCommand();
      },

      exitEmulateJSCommand() {
        this.printResponse(this.info.endEmulateJSMessage);
        this.emulateMode = false;
        this.printCommand();
      },

      // Init events.
      init() {
        let _this = this;

        // Write messages.
        window.addEventListener('keyup', function (event) {
          if ($(_this.$refs.terminal).closest('.window-border').hasClass('active')) {
            switch (event.key) {
              case 'Backspace':
                _this.textCommand = _this.textCommand.slice(0, -1);
                _this.writingText(_this.textCommand);
                break;

              case 'Enter':
                _this.callCommand(_this.textCommand);
                _this.textCommand = '';
                break;

              default:
                if (event.key.length === 1) {
                  _this.textCommand += event.key;
                  _this.writingText(_this.textCommand)
                }
            }
          }
        });
      }
    }
  })
</script>

<style>
  .terminal {
    background: #25303B;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 20px;
    height: 100%;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    overflow-y: auto;
  }

  .terminal p {
    line-height: 1;
    position: relative;
    text-align: left;
    font-size: 0.75em;
    font-family: monospace;
    white-space: normal;
    overflow: hidden;
  }

  .terminal span {
    color: #fff;
    font-weight: bold;
  }

  .terminal .command:before {
    content: '$>';
    color: #fff;
  }

  .terminal .command:last-child:after {
    content: '_';
    color: #fff;
    -webkit-animation: blink 1s 2s 2 forwards;
    -moz-animation: blink 1s 2s 2 forwards;
    -o-animation: blink 1s 2s 2 forwards;
    animation: blink 1s 2s 2 forwards;
  }

  .terminal .command {
    color: #9CD9F0;
  }

  .terminal .info {
    color: #CDEE69;
  }

  .terminal .response {
    color: #E09690;
  }
</style>
