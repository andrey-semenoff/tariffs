import { Component, Input } from '@angular/core';
import { FormatConnectionSpeedPipe } from '../../pipes/format-connection-speed.pipe';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TariffFeature } from '../../services/tariff-service.types';

@Component({
  selector: 'app-tariff-speed-widget',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormatConnectionSpeedPipe],
  templateUrl: './tariff-speed-widget.component.html',
  styleUrl: './tariff-speed-widget.component.sass',
})
export class TariffSpeedWidgetComponent {
  @Input({ required: true }) type!: 'download' | 'upload';
  @Input({ required: true }) speedFeature!: TariffFeature;
}
