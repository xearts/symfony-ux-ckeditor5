<?php
declare(strict_types=1);

namespace Xearts\Symfony\UX\Ckeditor5\DependencyInjection;

use Symfony\Bundle\TwigBundle\DependencyInjection\Configuration;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Definition;
use Symfony\Component\DependencyInjection\Extension\Extension;
use Symfony\Component\DependencyInjection\Extension\PrependExtensionInterface;
use Symfony\Component\DependencyInjection\Reference;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;
use Xearts\Symfony\UX\Ckeditor5\Form\Ckeditor5TextareaType;

class XeartsCkeditor5Extension extends Extension implements PrependExtensionInterface
{
    public function prepend(ContainerBuilder $container)
    {
        // Register the Dropzone form theme if TwigBundle is available
        $bundles = $container->getParameter('kernel.bundles');

        if (!isset($bundles['TwigBundle'])) {
            return;
        }
        $container->prependExtensionConfig(
            'twig',
            [
                'form_theme' => [
                    '@XeartsCkeditor5/form_theme.html.twig',
                ],
            ]
        );
    }

    public function load(array $configs, ContainerBuilder $container)
    {
        $definition = new Definition(
            Ckeditor5TextareaType::class,
            [
                new Reference(UrlGeneratorInterface::class, ContainerInterface::NULL_ON_INVALID_REFERENCE),
                new Reference(CsrfTokenManagerInterface::class, ContainerInterface::NULL_ON_INVALID_REFERENCE),
            ]
        );

        $container
            ->setDefinition('form.xearts_ckeditor5_textarea', $definition)
            ->addTag('form.type')
            ->setPublic(false)
        ;
    }
}
