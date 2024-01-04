'use client'
import { Badge, Button, Card, CardBody, CardFooter, Chip, Image, Link } from "@nextui-org/react";

export default function CardItem({data, key, lang, dictionary}:any) {

    return (
        <Card shadow="sm" key={key} className="">
                    <CardBody className="overflow-visible p-4">
                        <div className="flex justify-center">
                            <Badge content={data.year} color="warning" size="sm" variant="shadow" placement="bottom-right">
                                <Image
                                    isZoomed
                                    shadow="none"
                                    alt={data.title}
                                    className="object-fill w-full h-[140px] sm:h-[240px] md:h-[200px] mx-auto"
                                    src={data.thumbCard}
                                />
                            </Badge>
                        </div>
                        <div className="w-full flex text-small justify-between my-4">
                            <span className="font-bold text-large">{data.title}</span>
                            {/* <Chip color="warning" variant="flat" className="font-black">{data.year}</Chip> */}
                            <Chip 
                                color={`${data.active === 1 ? 'success' : 'default'}`} 
                                variant={`${data.active === 1 ? 'dot' : 'bordered'}`} >
                                {data.platform}
                            </Chip>
                        </div>
                        <p className="text-wrap font-light text-medium">{data.shortDescription}</p>
                    </CardBody>
                    <CardFooter className="flex justify-between">
                    <Link underline="hover" showAnchorIcon href={data.website} color="foreground">
                        {dictionary.goToWeb}
                    </Link>
                    <Button
                        href={`/${lang}/works/${data.id}`}
                        as={Link}
                        color="primary"
                        variant="solid"
                        size="sm"
                        >
                        {dictionary.more}
                    </Button>
                    </CardFooter>
                </Card>
    );
}