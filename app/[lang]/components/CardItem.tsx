'use client'
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, Chip, Divider, Image, Link } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function CardItem({data, key, lang, colSpan, dictionary}:any) {
    return (
        <motion.div whileHover={{ scale: 1 }} initial={{scale:0.9}} transition={{duration:0.3}} className={colSpan}>
            <Card shadow="sm" key={key} className="h-full">
                <CardHeader>
                    <div className="w-full flex text-small justify-between ml-1">
                        <span className="font-bold text-xl">{data.title}</span>
                        <Chip 
                            color={`${data.active === 1 ? 'success' : 'default'}`} 
                            variant={`${data.active === 1 ? 'dot' : 'bordered'}`} >
                            {data.platform}
                        </Chip>
                    </div>
                </CardHeader>
                    <Divider/>
                <CardBody className="overflow-visible px-4 bg-gradient-to-b from-primary-100 dark:from-primary-800 to-70%">
                    <div className="flex justify-center mb-4">
                        <Badge content={data.year} color="warning" size="sm" variant="shadow" placement="bottom-right">
                            <Image
                                shadow="none"
                                loading="lazy"
                                alt={data.title}
                                className="object-fill w-auto h-[140px] sm:h-[240px] md:h-[200px] mx-auto"
                                src={data.thumbCard}
                                width={200}
                                height={200}
                            />
                        </Badge>
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
        </motion.div>
    );
}