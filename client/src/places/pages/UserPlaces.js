import React from 'react';
import { useParams } from 'react-router';
import PlaceList from '../components/PlaceList';
import Faker from 'faker';

const UserPlaces = () => {
    const PLACES = [{
        id:'1',
        title: Faker.address.city(),
        description: Faker.lorem.lines(1),
        imageUrl: Faker.image.city(),
        address: Faker.address.streetAddress(),
        location: {
            lat: Faker.address.latitude(),
            lng: Faker.address.longitude()
        },
        creator: '1'
    },
    {
        id:'2',
        title: Faker.address.city(),
        description: Faker.lorem.lines(1),
        imageUrl: Faker.image.business(),
        address: Faker.address.streetAddress(),
        location: {
            lat: Faker.address.latitude(),
            lng: Faker.address.longitude()
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