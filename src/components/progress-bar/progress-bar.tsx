import { Component, Prop, PropDidChange, Element, Event, EventEmitter } from '@stencil/core'

@Component({
    tag: 'progress-bar',
    styleUrl: 'progress-bar.scss'
})
export class ProgressBar {

    @Prop() progress: number;
    @Element() bar: HTMLElement;
    @Event() progressDone: EventEmitter;

    componentDidLoad(){
        this.updateWidth();
    }

    @PropDidChange('progress')
    didChangeHandler() {
        console.log('new pr ogress this.witdh' + this.progress)
        this.updateWidth();
    }  

    private updateWidth(){
        
        (this.bar.children[0] as HTMLElement).style.width = this.progress + '%';

        if(this.progress == 100) {
            this.progressDoneEmitter();
        }
    }
    
    progressDoneEmitter() {
        this.progressDone.emit();
    } 

    render() {
        return (
            <div></div>
        );
    }
}