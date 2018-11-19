$(document).ready(function () {
    console.log("ready!");

    var artistUrl = 'http://www.songsterr.com/a/wa/artist?id={id}'

    // SUBMIT FORM //
    // SEARCH BY SONG//
    $('#bySong').on('submit', function (e) {
        e.preventDefault();
        let search = $('#songSearch').val(),
            songUrl = `http://www.songsterr.com/a/ra/songs.json?pattern=${search}`


        songSuccess = (result) => {
            console.log(result);
        }

        $.ajax({
            url: songUrl,
            method: 'GET',
            success: function (res) {
                $(".endResult").empty();
                $.each(res, function (key, val) {
                    $.each(val, function (key, value) {
                        $(".endResult").append(`<li>${value}</li>`);

                    })
                });
            },
            error: function (res) {
                alert('Oh No!');
            }
        })
    });
    // SUBMIT FORM //
    // SEARCH BY ARTIST//
    $('#byArtist').on('submit', function (e) {
        e.preventDefault();
        let search = $('#artistSearch').val(),
            artistUrl = `http://www.songsterr.com/a/ra/songs/byartists.json?artists=${search}`



        $.ajax({
            url: artistUrl,
            method: 'GET',
            success: function (res) {
                $(".endResult").empty();
                $.each(res, function (key, val) {
                    $.each(val, function (key, value) {
                        console.log(value);
                        $(".endResult").append(`<li>${value}</li>`);

                    })
                });
            },

        });
    });
});