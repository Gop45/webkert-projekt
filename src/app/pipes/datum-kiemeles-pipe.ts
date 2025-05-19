import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datumKiemeles',
  standalone: true
})
export class DatumKiemelesPipe implements PipeTransform {
    transform(datumStr: string): string {
        const today = new Date();
        const target = new Date(datumStr);
        const todayUTC = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
        const targetUTC = Date.UTC(target.getFullYear(), target.getMonth(), target.getDate());

        const diffNapok = Math.floor((targetUTC - todayUTC) / (1000 * 60 * 60 * 24));

        if (diffNapok === 0) return '💥 Ma van';
        if (diffNapok === 1) return '⏳ Holnap';
        if (diffNapok < 0) return '📜 Már elmúlt';
        return '📅 ' + datumStr;
    }

}
