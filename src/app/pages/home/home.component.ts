import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { Video } from '../../models/youtube.models';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos: Video[] = []
  canal: string
  constructor( private youtubeService: YoutubeService) { }

  ngOnInit(): void {

    this.cargarVideos()

  }

  cargarVideos() {
      this.youtubeService.getVideos().subscribe( resp => {

        this.videos.push( ...resp)
        console.log(this.videos)
        this.canal = this.videos[0].channelTitle
      })
  }

  mostrarVideo( video: Video ){

    Swal.fire({
      width: '80%',
      background: '#000000',
      backdrop: 'rgba(0, 0, 0, 0.8 )',
      confirmButtonColor: '#000000',
      html: `
        <h6>${ video.title }</h6>
        <hr>
        <iframe
            width="100%"
            src="https://www.youtube.com/embed/${ video.resourceId.videoId }"
            frameborder="0"
            allow="accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture"
            allowfullscreen>
        </iframe>
      `,
      confirmButtonText:'Cerrar',
    })
  }

}
