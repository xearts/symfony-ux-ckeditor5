<?php
declare(strict_types=1);

namespace Xearts\Symfony\UX\Ckeditor5\Tests\Kernel;

trait AppKernelTrait
{
    public function getCacheDir()
    {
        return $this->createTmpDir('cache');
    }

    public function getLogDir()
    {
        return $this->createTmpDir('logs');
    }

    private function createTmpDir(string $type): string
    {
        $dir = sys_get_temp_dir().'/ckeditor_bundle/'.uniqid($type.'_', true);

        if (!file_exists($dir)) {
            mkdir($dir, 0777, true);
        }

        return $dir;
    }
}
