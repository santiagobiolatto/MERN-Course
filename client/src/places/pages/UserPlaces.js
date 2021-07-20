import React from 'react';
import { useParams } from 'react-router';
import PlaceList from '../components/PlaceList';

const UserPlaces = () => {
    const PLACES = [{
        id:'1',
        title: 'Patio Olmos Shoping',
        description: 'Centro comercial urbano con una arquitectura llamativa, tiendas de todo tipo, restaurantes y cine.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Patio_Olmos_2011-12-22.jpg/1200px-Patio_Olmos_2011-12-22.jpg',
        address: 'Av. Vélez Sarsfield 361, Córdoba',
        location: {
            lat: -31.419581362824193,
            lng: -64.18854301351536
        },
        creator: '1'
    },
    {
        id:'2',
        title: 'Torre Eiffel',
        description: 'Emblemática torre de hierro forjado diseñada por Gustave Eiffel y construida en 1889, dispone de observatorio.',
        imageUrl: 'https://www.toureiffel.paris/sites/default/files/styles/1200x675/public/actualite/image_principale/vue_depuisjardins_webbanner.jpg?itok=wx044mad',
        address: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, Francia',
        location: {
            lat: 48.85840231373297, 
            lng: 2.2944828501325065
        },
        creator: '2'
    }];
    const userId = useParams().userId;
    const loadedPlaces = PLACES.filter((place)=>{
        return place.creator === userId
    });
    return <PlaceList items={loadedPlaces}/>
}

export default UserPlaces;