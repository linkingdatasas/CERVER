import {Component, OnInit, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {UtilityService} from '../../services/utility.service';

import {Message} from 'primeng//api';
import {MessageService} from 'primeng/api';

import {MessageModule} from 'primeng/message';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  title: string;
  txt: string;
}

@Component({
  selector: 'verify',
  templateUrl: 'verify.component.html',
  styleUrls: ['verify.component.scss']
})

export class VerifyComponent implements OnInit {

  public searching = false;
  public success_msg = '';


  constructor (protected  messageService: MessageService, 
    protected utilityService: UtilityService,
    public dialog: MatDialog){}

  ngOnInit() {
  }

  

  verify(json_txt) {
    let json_obj = JSON.parse(json_txt)
    this.utilityService.verify(json_obj).subscribe(res => {
      console.log(res)
      if (res['res']==true){
        this.openDialog('success', 'LA CERTIFICACIÓN CONSULTADA ES AUTÉNTICA');
        this.success_msg = 'El certificado es auténtico';
      }else{
        this.openDialog('error', 'LA CERTIFICACIÓN CONSULTADA NO ES AUTÉNTICA');
        this.success_msg = 'El certificado está alterado';
      }
    });

  }


  openDialog(title, txt): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '609px',
      height: '219px',
      data: {title: title, txt: txt}
    });
  }

  sendNotification(severity: string, detail: string) {
    this.messageService.add({
        key: 'notification',
        severity: severity,
        detail: detail,
    });
  }



}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog.html',
  styleUrls: ['dialog.scss']
})
export class DialogOverviewExampleDialog {
  public txt = '';
  public title = '';
  public imgSrc ='';
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.txt = data.txt;
      this.title = data.title;
      if (data.title=='success'){
        this.imgSrc = 'assets/imgs/Grupo6.png';
      }else{
        this.imgSrc = 'assets/imgs/Grupo484.png';
      }
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}