import CatPhoto from './../App/images/Photo.png'  

const DATA = {
    
Header : ["Ты сегодня покормил кота?"],
Products : [
    
    {
        id: '1',
        name: 'Нямушка',
        taste: 'с фуа-гра',
        quantity: '10  порций',
        img: CatPhoto,
        weight_value: '0,5',
        weight_measure: 'кг',
        present: 'мышь в подарок',
        dop_info: '',
        top_info_default: 'Сказочное заморское яство',
        top_info_selected_hover: 'Котэ не одобряет?',
        footer_info_default: 'Чего сидишь? Порадуй котэ,',
        footer_info_selected: 'Печень утки разварная с артишоками.',
        footer_info_disable: 'Печалька, с фуа-гра закончился.',
        stocked: "yes" //есть ли товар в наличии
    },

    {
        id: '2',
        name: 'Нямушка',
        taste: 'с рыбой',
        quantity: '40 порций',
        img : CatPhoto,
        weight_value : '2',
        weight_measure : 'кг',
        present: '2 мыши в подарок',
        dop_info: '  ',
        top_info_default: 'Сказочное заморское яство',
        top_info_selected_hover: 'Котэ не одобряет?',
        footer_info_default: 'Чего сидишь? Порадуй котэ,',
        footer_info_selected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
        footer_info_disable: 'Печалька, с рыбой закончился.',
        stocked: "yes"
    },

    {
        id: '3',
        name: 'Нямушка',
        taste: 'с курой',
        quantity: '100 порций',
        img : CatPhoto,
        weight_value : '5',
        weight_measure : 'кг',
        present: '5 мышей в подарок',
        dop_info: 'заказчик доволен',
        top_info_default: 'Сказочное заморское яство',
        top_info_selected_hover: 'Котэ не одобряет?',
        footer_info_default: 'Чего сидишь? Порадуй котэ,',
        footer_info_selected: 'Филе из цыплят с трюфелями в бульоне.',
        footer_info_disable: 'Печалька, с курой закончился.',
        stocked: "no"
    } 

]
}


export default DATA;