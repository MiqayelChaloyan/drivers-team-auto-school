import { DocumentsIcon } from '@sanity/icons';
import { FaFolderOpen as icon, FaFolder } from "react-icons/fa6";
import { FcSupport } from "react-icons/fc";
import { GoProjectSymlink } from "react-icons/go";


export default (S: any) =>
    S.list()
        .title('Base')
        .items([
            ...S.documentTypeListItems().filter(
                (listItem: any) => ![
                    'main',
                    'pricing',
                    'features',
                    'ourStudents',
                    'carTypeDetails',
                    'trainingTypeDetalis',
                    'competitiveAdvantages',
                    'aboutUs',
                    'reviews',
                    'texts',
                    'contact-us',
                    'redirects'
                ].includes(listItem.getId())
            ),
            S.listItem()
                .title('Pages')
                .child(
                    S.list()
                        .title('Pages')
                        .items([
                            S.listItem()
                                .title('Home')
                                .icon(FaFolder)
                                .child(
                                    S.list()
                                        .title('Pages')
                                        .items([
                                            S.listItem()
                                                .title('Main')
                                                .icon(icon)
                                                .child(S.document().schemaType('main').documentId('main')),
                                            S.listItem()
                                                .title('Car Type Details')
                                                .icon(icon)
                                                .child(S.document().schemaType('carTypeDetails').documentId('carTypeDetails')),
                                            S.listItem()
                                                .title('Features')
                                                .icon(icon)
                                                .child(S.document().schemaType('features').documentId('features')),
                                            S.listItem()
                                                .title('Pricing')
                                                .icon(icon)
                                                .child(S.document().schemaType('pricing').documentId('pricing')),
                                            S.listItem()
                                                .title('Training Type Detalis')
                                                .icon(icon)
                                                .child(S.document().schemaType('trainingTypeDetalis').documentId('trainingTypeDetalis')),
                                            S.listItem()
                                                .title('Our Students')
                                                .icon(icon)
                                                .child(S.document().schemaType('ourStudents').documentId('ourStudents')),
                                            S.listItem()
                                                .title('Competitive Advantages')
                                                .icon(icon)
                                                .child(S.document().schemaType('competitiveAdvantages').documentId('competitiveAdvantages')),
                                        ])),

                            S.listItem()
                                .title('About')
                                .icon(FaFolder)
                                .child(
                                    S.list()
                                        .title('Pages')
                                        .items([
                                            S.listItem()
                                                .title('About Us')
                                                .icon(icon)
                                                .child(S.document().schemaType('aboutUs').documentId('aboutUs')),
                                            S.listItem()
                                                .title('Reviews')
                                                .icon(icon)
                                                .child(S.document().schemaType('reviews').documentId('reviews')),
                                        ])),
                            S.listItem()
                                .title('Footer')
                                .icon(FaFolder)
                                .child(
                                    S.list()
                                        .title('Pages')
                                        .items([
                                            S.listItem()
                                                .title('Texts')
                                                .icon(icon)
                                                .child(S.document().schemaType('texts').documentId('texts')),
                                        ])),
                        ])
                ),
            S.listItem()
                .title('Contact Us')
                .child(
                    S.list()
                        .title('Pages')
                        .items([
                            S.listItem()
                                .title('Contact Us')
                                .icon(FcSupport)
                                .child(S.document().schemaType('contact-us').documentId('contact-us')),
                        ])
                ),
            S.listItem()
                .title('Redirects')
                .child(
                    S.list()
                        .title('Pages')
                        .items([
                            S.listItem()
                                .title('Redirects')
                                .icon(GoProjectSymlink)
                                .child(S.document().schemaType('redirects').documentId('redirects')),
                        ])
                ),
        ]);
